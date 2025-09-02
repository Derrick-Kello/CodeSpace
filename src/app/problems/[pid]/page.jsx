'use client';

import Workspace from "@/components/Workspace/Workspace";
import React, { useEffect, useState, use } from "react";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "@/firebase/firebase";

// export async function generateStaticParams() {
//   // We will dynamically generate paths based on problems in Firestore
//   // For now, return an empty array or fetch a limited set for development
//   return [];
// }

const ProblemPage = ({ params }) => {
  const { pid } = use(params); // Revert to direct destructuring
  const [problem, setProblem] = useState(null);

  useEffect(() => {
    const getProblem = async () => {
      if (!pid) return;
      const docRef = doc(firestore, "problems", pid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProblem({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.log("No such problem!");
        setProblem(null);
      }
    };
    getProblem();
  }, [pid]);

  if (!problem) {
    return <div>Loading or Problem Not Found...</div>;
  }

  return <Workspace problem={problem} />;
};

export default ProblemPage;