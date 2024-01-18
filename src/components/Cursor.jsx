import { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const cursor = document.getElementById("cursor");

      if (cursor) {
        cursor.style.left = event.clientX - 100 + "px";
        cursor.style.top = event.clientY - 100 + "px";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      id="cursor"
      className=" bg-red-600 cursor"
      style={{
        position: "fixed",
        width: "200px",
        height: "200px",
        background: "red",
        borderRadius: "50%",
      }}
    >
    </div>
  );
};

export default Cursor;
