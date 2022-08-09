import Box from "@mui/material/Box";
import BoardInput from "../../components/EtcItem/BoardInput";
import UnstyledButtonsSimple from "../../components/EtcItem/BasicButton";
import { Link } from "react-router-dom";
import BoardInput2 from "../../components/EtcItem/BoardInput2";

const headerStyle = {
  marginTop: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "150px",
};

const Contents_one = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const Contents_two = {
  fontSize: "30px",
  width: "100%",
  display: "flex",
  marginRight: "60px",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const btnWrapper = {
  display: "flex",
  alignItems: "center",
  height: "200px",
  justifyContent: "center",
  marginLeft: "100px",
};

const test = {
  display: "flex",
};

function CreateMenu() {
  return (
    <>
      <Box>
        <div style={headerStyle}>
          <h1>새 메뉴 작성하기</h1>
        </div>
      </Box>
      <Box style={Contents_one}>
        <div style={Contents_two}>
          <BoardInput class="addess" label={"픽업 주소"} name="address" />
          <BoardInput label={"주문 희망 브랜드"} name="barnd" />
          <BoardInput label={"주문 희망 시간"} name="time" />
          <div style={test}>
            <BoardInput2 label={"주문 희망 메뉴"} name="menu" />
            <BoardInput2 label={"메뉴 가격"} name="menuCost" />
          </div>
          <BoardInput label={"총 금액"} name="sum" />
          <BoardInput label={"전달 사항"} name="description" />
          <div id="btnWrap" style={btnWrapper}>
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              <UnstyledButtonsSimple label={"작성"} />
            </Link>
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              <UnstyledButtonsSimple label={"작성 취소"} />
            </Link>
          </div>
        </div>
      </Box>
    </>
  );
}

export default CreateMenu;
