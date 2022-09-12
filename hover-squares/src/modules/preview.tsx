import { useHoveredSelector } from "../hooks/useSettingsSelector";

export const Preview = () => {
  const { hovered } = useHoveredSelector((state) => state.squares);

  return (
    <div>
      <h2 className="text-2xl mb-3 font-bold">Hover squares</h2>
      {hovered.length ? (
        <ul>
          {hovered.map((elem) => (
            <li
              key={elem}
              className="bg-orange-100 border border-orange-200 mb-1 rounded p-1 text-orange-900"
            >
              {elem}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Preview;
