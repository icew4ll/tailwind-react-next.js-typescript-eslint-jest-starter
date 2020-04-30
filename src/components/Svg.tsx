export default function ClassName() {
  return (
    <svg height="100%" width="100%" viewBox="0 0 200 200" className="w-48 p-2 bg-gray-900">
      <defs>
        <linearGradient id="myGradient" gradientTransform="rotate(90)">
          <stop offset="5%" stopColor="#3785de" />
          <stop offset="95%" stopColor="#27558a" />
        </linearGradient>
      </defs>
      {/*min-x, min-y, width and height*/}
      <circle cx={100} cy={100} r={100} fill="url(#myGradient)" />
      <text fill="white" x="80" y="50" className="text-xl">
        a
      </text>
      <text fill="white" x="140" y="20" className="text-xl">
        b
      </text>
      <text fill="white" x="155" y="65" className="text-xl">
        c
      </text>
      <text fill="white" x="187" y="32" className="text-xl">
        h
      </text>
      {/* LINES */}
      {/* (x2, y2), (x1, y1) */}

      {/* b */}
      <path strokeWidth="2" stroke="red" d="M 200 1 L 100 1" />
      {/* a */}
      <path strokeWidth="2" stroke="red" d="M 100 0 L 100 100" />
      {/* c */}
      <path strokeWidth="2" stroke="red" d="M 200 0 L 100 100" />
    </svg>
  )
}
