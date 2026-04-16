import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const page = () => {
  return (
    <div>
      <h2>Start the project</h2>
      <Button variant={"destructive"}>
        <Trash2 />
        <span>Delete</span>
      </Button>
    </div>
  );
};

export default page;
