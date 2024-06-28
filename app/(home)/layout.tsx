
import React from "react"

const HomeLayout = (props: {
    children:React.ReactNode
}) => {
    return(<>
    <div>{props.children}</div>
    </>)
}
export default HomeLayout