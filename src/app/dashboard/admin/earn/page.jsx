
import React from 'react';
import SchoolFinanceSummary from './EarnAndCost';
import { getEarnAndCostData } from '@/lib/get';

const EarnAndCost =async () => {
    const data={
        datas:'romjan'
    }
const postEarnAndCostData= await getEarnAndCostData(data)
console.log(postEarnAndCostData,'from social');
    return (
        <div>
            <SchoolFinanceSummary postEarnAndCostData={postEarnAndCostData} />
        </div>
    );
};

export default EarnAndCost;