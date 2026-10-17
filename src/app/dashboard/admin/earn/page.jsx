
import React from 'react';
import SchoolFinanceSummary from './EarnAndCost';
import { getEarnAndCostData } from '@/lib/get';

const EarnAndCost =async () => {
   
const postEarnAndCostData= await getEarnAndCostData()
console.log(postEarnAndCostData,'from social');
    return (
        <div>
            <SchoolFinanceSummary postEarnAndCostData={postEarnAndCostData} />
        </div>
    );
};

export default EarnAndCost;