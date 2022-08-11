interface Node {
  data: {
    id: string;
    name: string;
    parent?: string;
  }
}

interface Edge {
  data: {
    id: string;
    source: string;
    target: string;
  }
}

export interface HomeServiceResponse {
  main: string;
  nodes: Node[];
  edges: Edge[];
}
