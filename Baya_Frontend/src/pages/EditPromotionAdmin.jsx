import { useParams } from "react-router-dom";
import CreatePromotionForm from "../components/admin/tablePromotionAdmin/CreatePromotionForm";

const EditPromotionAdmin = () => {
  const { id } = useParams();

  return (
    <>
      <CreatePromotionForm promotionId={id} />
    </>
  );
};

export default EditPromotionAdmin;
