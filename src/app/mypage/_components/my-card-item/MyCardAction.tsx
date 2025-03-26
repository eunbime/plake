import { Button } from "@/components/ui/Button";
import { ButtonProps } from "@/types/gathering/my-card";

interface MyCardActionProps {
  btn: ButtonProps;
}

const MyCardAction = ({ btn }: MyCardActionProps) => {
  return (
    <Button
      variant={btn.variant}
      className="h-10 w-[120px]"
      onClick={btn.onClick}
    >
      {btn.label}
    </Button>
  );
};

export default MyCardAction;
