import { earnAndCostPost } from '@/lib/post';
import React from 'react';
import SchoolFinanceSummary from './EarnAndCost';

const EarnAndCost =async () => {
    const data={
        datas:'romjan'
    }
const postEarnAndCostData= await earnAndCostPost(data)

    return (
        <div>
            <SchoolFinanceSummary/>
        </div>
    );
};

export default EarnAndCost;