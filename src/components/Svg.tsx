export default function ClassName() {
  const cy = 130
  return (
    <svg height="100%" width="100%" viewBox="0 0 200 240" className="max-w-xs p-2 bg-gray-900">
      <defs>
        <linearGradient id="myGradient" gradientTransform="rotate(90)">
          <stop offset="5%" stopColor="#3785de" />
          <stop offset="95%" stopColor="#27558a" />
        </linearGradient>
      </defs>
      {/*min-x, min-y, width and height*/}
      <circle cx={100} cy={140} r={100} fill="url(#myGradient)" />
      <text fill="white" x="34" y="10" className="text-xs">
        Part 1:
      </text>
      <text fill="white" x="4" y="25" className="text-xs">
        Horizon Distance
      </text>
      <text fill="white" x="135" y="10" className="text-xs">
        Part 2:
      </text>
      <text fill="white" x="108" y="25" className="text-xs">
        Hidden Distance
      </text>
      <text fill="white" x="85" y="80" className="text-xl">
        a
      </text>
      <text fill="white" x="138" y="58" className="text-xl">
        b
      </text>
      <text fill="white" x="50" y="58" className="text-xl">
        b
      </text>
      <text fill="white" x="50" y="85" className="text-xl">
        c
      </text>
      <text fill="white" x="138" y="85" className="text-xl">
        c
      </text>
      <text fill="white" x="187" y="72" className="text-xl">
        h
      </text>
      <text fill="white" x="5" y="72" className="text-xl">
        h
      </text>
      {/* LINES */}
      {/* (x2, y2), (x1, y1) */}

      {/* b */}
      <path strokeWidth="2" stroke="red" d="M 200 40 L 100 40" />
      <path strokeWidth="2" stroke="red" d="M 0 40 L 100 40" />
      {/* a */}
      <path strokeWidth="2" stroke="red" d="M 100 40 L 100 140" />
      {/* c */}
      <path strokeWidth="2" stroke="red" d="M 200 40 L 100 140" />
      <path strokeWidth="2" stroke="red" d="M 0 40 L 100 140" />
    </svg>
  )
}
