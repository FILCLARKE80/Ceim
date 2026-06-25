import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Background,
  ReactFlow,
  type Edge,
  type Node,
  Position,
} from '@xyflow/react'
import type { Career } from '../data/types'
import { getSubject } from '../data/subjects'
import { getCareer } from '../data/careers'

type Group = 'subject' | 'course' | 'role' | 'related'

const GROUP_STYLE: Record<Group, { bg: string; border: string; text: string }> = {
  subject: { bg: '#ecfdf5', border: '#34d399', text: '#047857' },
  course: { bg: '#fff7ed', border: '#fb923c', text: '#c2410c' },
  role: { bg: '#fef2f2', border: '#f87171', text: '#b91c1c' },
  related: { bg: '#eef6ff', border: '#599aff', text: '#1643dd' },
}

interface Spoke {
  id: string
  label: string
  group: Group
  navId?: string
}

export default function NetworkGraph({ career }: { career: Career }) {
  const navigate = useNavigate()

  const { nodes, edges } = useMemo(() => {
    const spokes: Spoke[] = []

    career.seniorCycleSubjects.forEach((s) => {
      const subj = getSubject(s.subjectId)
      spokes.push({ id: `s-${s.subjectId}`, label: subj?.name ?? s.subjectId, group: 'subject' })
    })
    career.collegeCourses.forEach((c) =>
      spokes.push({ id: `c-${c.code}`, label: `${c.institution}`, group: 'course' }),
    )
    career.roles.forEach((r, i) => spokes.push({ id: `r-${i}`, label: r.title, group: 'role' }))
    ;(career.relatedCareers ?? []).forEach((rid) => {
      const rc = getCareer(rid)
      if (rc) spokes.push({ id: `rel-${rid}`, label: rc.title, group: 'related', navId: rid })
    })

    const centreX = 0
    const centreY = 0
    const radius = 320

    const nodes: Node[] = [
      {
        id: 'centre',
        position: { x: centreX - 90, y: centreY - 30 },
        data: { label: <div className="text-sm font-bold">{career.icon} {career.title}</div> },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        style: {
          width: 180,
          background: '#1d57f0',
          color: 'white',
          border: '2px solid #1643dd',
          borderRadius: 16,
          padding: '10px 12px',
          textAlign: 'center',
        },
      },
    ]

    const edges: Edge[] = []
    const n = spokes.length
    spokes.forEach((spoke, i) => {
      const angle = (i / n) * Math.PI * 2 - Math.PI / 2
      const x = centreX + radius * Math.cos(angle)
      const y = centreY + radius * Math.sin(angle)
      const style = GROUP_STYLE[spoke.group]
      nodes.push({
        id: spoke.id,
        position: { x: x - 80, y: y - 22 },
        data: {
          label: (
            <div className="text-[11px] font-semibold leading-tight">
              {spoke.label}
              {spoke.navId && <span className="ml-1 opacity-60">→</span>}
            </div>
          ),
        },
        style: {
          width: 160,
          background: style.bg,
          border: `1.5px solid ${style.border}`,
          color: style.text,
          borderRadius: 10,
          padding: '6px 8px',
          cursor: spoke.navId ? 'pointer' : 'default',
        },
      })
      edges.push({
        id: `centre-${spoke.id}`,
        source: 'centre',
        target: spoke.id,
        animated: spoke.group === 'course',
        style: { stroke: style.border, strokeWidth: 1.5 },
      })
    })

    return { nodes, edges }
  }, [career])

  return (
    <div className="h-[520px] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        proOptions={{ hideAttribution: true }}
        nodesConnectable={false}
        minZoom={0.2}
        onNodeClick={(_, node) => {
          const id = node.id
          if (id.startsWith('rel-')) {
            navigate(`/career/${id.replace('rel-', '')}`)
          }
        }}
      >
        <Background color="#e2e8f0" gap={20} />
      </ReactFlow>
      <div className="flex flex-wrap gap-3 border-t border-slate-100 bg-slate-50 px-4 py-2 text-[11px]">
        <Legend color="#34d399" label="Leaving Cert subjects" />
        <Legend color="#fb923c" label="College courses" />
        <Legend color="#f87171" label="Job roles" />
        <Legend color="#599aff" label="Related careers (click)" />
      </div>
    </div>
  )
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-slate-600">
      <span className="h-2.5 w-2.5 rounded-full" style={{ background: color }} />
      {label}
    </span>
  )
}
