import React, { ReactNode } from "react";
import { useQuery, DocumentNode } from "@apollo/client";

interface QueryProps {
  children: (data: any) => ReactNode;
  query: DocumentNode;
}

const Query: React.FC<QueryProps> = ({ children, query }) => {
  const { data, loading, error } = useQuery(query);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  return children({ data });
};

export default Query;
