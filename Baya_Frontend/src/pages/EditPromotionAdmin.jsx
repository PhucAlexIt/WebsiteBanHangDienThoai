import { useParams } from "react-router-dom";
import EditPromotion from "../components/admin/tablePromotionAdmin/EditPromotion";

const EditPromotionAdmin = () => {
  const { id } = useParams();

  return (
    <>
      <EditPromotion promotionId={id} />
    </>
  );
};

export default EditPromotionAdmin;
