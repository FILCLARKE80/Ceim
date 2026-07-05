import { useMemo } from 'react'
import {
  Background,
  Controls,
  ReactFlow,
  type Edge,
  type Node,
  MarkerType,
  Position,
} from '@xyflow/react'
import type { Career } from '../data/types'
import { getSubject } from '../data/subjects'

const COL_WIDTH = 250
const ROW_HEIGHT = 92
const NODE_WIDTH = 200

// Short display names so college nodes stay compact when showing a course name.
const INSTITUTION_SHORT: Record<string, string> = {
  'Trinity College Dublin': 'TCD',
  'University College Dublin': 'UCD',
  'University College Cork': 'UCC',
  'University of Galway': 'Galway',
  'Dublin City University': 'DCU',
  'University of Limerick': 'UL',
  'Maynooth University': 'Maynooth',
  'TU Dublin': 'TU Dublin',
}

function shortInstitution(name: string): string {
  return INSTITUTION_SHORT[name] ?? name
}

const STAGE_STYLES: Record<string, { bg: string; border: string; text: string }> = {
  junior: { bg: '#eef6ff', border: '#8ebfff', text: '#1643dd' },
  senior: { bg: '#ecfdf5', border: '#6ee7b7', text: '#047857' },
  college: { bg: '#fff7ed', border: '#fdba74', text: '#c2410c' },
  postgrad: { bg: '#faf5ff', border: '#d8b4fe', text: '#7e22ce' },
  role: { bg: '#fef2f2', border: '#fca5a5', text: '#b91c1c' },
}

interface Column {
  key: string
  label: string
  items: { id: string; title: string; subtitle?: string }[]
}

function buildColumns(career: Career): Column[] {
  return [
    {
      key: 'junior',
      label: '1st–3rd Year · Junior Cycle',
      items: career.juniorCycle.map((j, i) => ({ id: `jr-${i}`, title: j })),
    },
    {
      key: 'senior',
      label: '5th–6th Year · Leaving Cert',
      items: career.seniorCycleSubjects.map((s) => {
        const subj = getSubject(s.subjectId)
        return {
          id: `sr-${s.subjectId}`,
          title: subj?.name ?? s.subjectId,
          subtitle: s.importance,
        }
      }),
    },
    {
      key: 'college',
      label: 'College · CAO',
      items: career.collegeCourses.map((c) => ({
        id: `co-${c.code}`,
        title: c.name,
        subtitle: `${shortInstitution(c.institution)} · ${c.caoPoints ? `${c.caoPoints} pts` : 'portfolio'}`,
      })),
    },
    {
      key: 'postgrad',
      label: 'Postgrad / Training',
      items: career.postgrad.map((p, i) => ({ id: `pg-${i}`, title: p.name, subtitle: p.type })),
    },
    {
      key: 'role',
      label: 'Possible Roles',
      items: career.roles.map((r, i) => ({ id: `ro-${i}`, title: r.title })),
    },
  ]
}

export default function PathwayFlow({ career }: { career: Career }) {
  const { nodes, edges } = useMemo(() => {
    const columns = buildColumns(career)
    const maxRows = Math.max(...columns.map((c) => c.items.length))
    const nodes: Node[] = []
    const edges: Edge[] = []

    columns.forEach((col, colIndex) => {
      const stage = STAGE_STYLES[col.key]
      // header node for the column
      nodes.push({
        id: `head-${col.key}`,
        position: { x: colIndex * COL_WIDTH, y: -70 },
        data: { label: col.label },
        draggable: false,
        selectable: false,
        style: {
          width: NODE_WIDTH,
          background: 'transparent',
          border: 'none',
          fontSize: 11,
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
          color: stage.text,
        },
      })

      const offset = ((maxRows - col.items.length) * ROW_HEIGHT) / 2
      col.items.forEach((item, rowIndex) => {
        nodes.push({
          id: item.id,
          position: { x: colIndex * COL_WIDTH, y: offset + rowIndex * ROW_HEIGHT },
          data: {
            label: (
              <div className="text-left">
                <div className="text-[12px] font-semibold leading-tight">{item.title}</div>
                {item.subtitle && (
                  <div className="mt-0.5 text-[10px] uppercase tracking-wide opacity-70">
                    {item.subtitle}
                  </div>
                )}
              </div>
            ),
          },
          sourcePosition: Position.Right,
          targetPosition: Position.Left,
          style: {
            width: NODE_WIDTH,
            background: stage.bg,
            border: `1.5px solid ${stage.border}`,
            borderRadius: 12,
            padding: '8px 10px',
            color: stage.text,
          },
        })
      })

      // connect every item in this column to every item in the next column
      const next = columns[colIndex + 1]
      if (next) {
        col.items.forEach((from) => {
          next.items.forEach((to) => {
            edges.push({
              id: `${from.id}->${to.id}`,
              source: from.id,
              target: to.id,
              style: { stroke: '#cbd5e1', strokeWidth: 1 },
              markerEnd: { type: MarkerType.ArrowClosed, color: '#cbd5e1', width: 14, height: 14 },
            })
          })
        })
      }
    })

    return { nodes, edges }
  }, [career])

  return (
    <div className="h-[460px] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        fitViewOptions={{ padding: 0.15 }}
        proOptions={{ hideAttribution: true }}
        nodesDraggable={false}
        nodesConnectable={false}
        minZoom={0.3}
      >
        <Background color="#e2e8f0" gap={20} />
        <Controls showInteractive={false} />
      </ReactFlow>
    </div>
  )
}
