// import reactSVG from '../../../assets/images/react.svg'

import { assets, expense, income, staff } from "../../../assets/images"
import { Stats } from "./Stats"


export const StatsBox = () => {
    return (
        <div className="row">
            <Stats icon={income} text="Total Income" value="953,000" />
            <Stats icon={expense} text="Total Expense" value="236,000" />
            <Stats icon={assets} text="Total Assets" value="987,563" />
            <Stats icon={staff} text="Total Staff" value="953,000" />
        </div>
    )
}
