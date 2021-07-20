import { useEffect } from "react";
import { useRouter } from "next/router";

import { useEditState } from "tinacms/dist/edit-state";

const GoToEditPage: React.FC = () => {
  const { setEdit } = useEditState();
  const router = useRouter();
  useEffect(() => {
    setEdit(true);
    router.back();
  }, []);
  return <div>Going into edit mode...</div>;
};

export default GoToEditPage;
