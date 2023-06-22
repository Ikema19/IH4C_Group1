import { NextPage } from "next";
import React from "react";
import Layout from "../../../components/template/layout";
import Link from "next/link";
import Image from "next/image";
import { Course, services } from "../../../features/course";
import { useRouter } from "next/router";

type State = {
  course?: Course;
};

const initialState: State = {
  course: undefined,
};

const ModelCourseDetail: NextPage = () => {
  const [course, setCourse] = React.useState(initialState.course);
  const router = useRouter();


  React.useEffect(() => {
    (async () => {
      if (!router.isReady) return;
      const modelId = router.query.modelId;
      if (!modelId) throw new Error("modelIdがありません");

      const result = await services.fetchModelCourseById(modelId.toString());
      setCourse(result);
    })();
  }, [router]);

  return (
    <Layout>
      <h2>モデルコース例１</h2>
      <ul className="grid gap-8 grid-flow-row grid-cols-[repeat(2,1fr)]">
        {course?.route.map((route) => {
          return (
            <li key={route.id}>
              <Image
                  src="/no-image.png"
                  alt={`モデルコース ${route.id}`}
                  width={198}
                  height={115}
                  sizes={"100vw"}
                  className="rounded-sm"
                />
                <span>
                  {route.name}
                </span>
            </li>
          )
        })}
      </ul>

    </Layout>
  );
};

export default ModelCourseDetail;
