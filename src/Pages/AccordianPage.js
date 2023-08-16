import Accordian from "../components/Accordian";

function AccordianPage() {
  const items = [
    {
      id: 1,
      label: "hi1",
      cantent: "boom burah",
    },
    {
      id: 2,
      label: "hi2",
      cantent: "boom burah",
    },
    {
      id: 3,
      label: "hi3",
      cantent: "boom burah",
    },
  ];
  return <Accordian items={items} />;
}
export default AccordianPage;
