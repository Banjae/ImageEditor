import ControlbarCss from "./controlbarCss";

interface IControl {
  title: string;
  value: number;
}

const Controlbar = (props: IControl) => {
  const dragStart = (e: React.DragEvent<HTMLSpanElement>) => {
    e.preventDefault();
  };
  const drag = (e: React.DragEvent<HTMLSpanElement>) => {
    if (e.buttons === 1) {
      const rect = e.currentTarget.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const width = rect.right - rect.left;
      let percentage = Math.round((mouseX / width) * 300) - 100;
      percentage = Math.max(-100, Math.min(200, percentage)); // 범위 제한
      console.log(percentage);
    }
  };

  return (
    <ControlbarCss>
      <div className="control">
        <span className="bar">
          <span
            className="move-bt"
            style={{ left: props.value + "%" }}
            draggable
            onDragStart={dragStart}
            onDrag={drag}
          ></span>
        </span>
      </div>
      <div className="percent">
        {props.title} : {props.value} %
      </div>
    </ControlbarCss>
  );
};

export default Controlbar;
