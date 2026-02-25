import { } from "./button.css"
export function Button({ children,color }) { return (<><button className="btn" style={{ backgroundColor: color || '#007bff' }}>{children}</button></>) }