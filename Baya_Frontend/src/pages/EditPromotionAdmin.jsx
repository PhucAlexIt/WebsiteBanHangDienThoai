import { useParams } from "react-router-dom";
import CreatePromotionForm from "../components/admin/tablePromotionAdmin/CreatePromotionForm";

const EditPromotionAdmin = () => {
  const { id } = useParams(); // lấy id từ URL

  return (
    <>
      <CreatePromotionForm promotionId={id} />
    </>
  );
};

export default EditPromotionAdmin;
