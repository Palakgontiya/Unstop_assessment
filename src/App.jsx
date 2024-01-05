import SideBar from "./components/LeftPannel/SideBar.Layout";
import Assesment from "./components/RightPannel/Assesment.layout";
// import AssesmentModal from "./components/modal/AssesmentModal";

function App() {
  return (
    <div className="w-full bg-slate-100  flex justify-start gap-4   ">
      <div className="md:flex hidden">
        <SideBar />
      </div>
      <Assesment />
      {/* <AssesmentModal /> */}
    </div>
  );
}

export default App;
