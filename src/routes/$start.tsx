import { createFileRoute, useParams } from "@tanstack/react-router";
import StartPage from "../components/startPage";

export const Route = createFileRoute("/$start")({
  component: RouteComponent,
});

function RouteComponent() {
  const { startId } = useParams<{ start: number }>({});
  return <StartPage id={startId} />;
}
