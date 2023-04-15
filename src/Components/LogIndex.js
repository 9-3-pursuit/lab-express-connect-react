import { useParams } from "react-router-dom";

export default function LogsIndex() {
  const { index } = useParams();
  return <div>Log of index: {index}</div>;
}
