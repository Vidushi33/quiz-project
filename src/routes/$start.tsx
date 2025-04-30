import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$start')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/$start"!</div>
}
  