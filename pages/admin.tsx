import {
    Card,
    Title,
    Text,
    Tab,
    TabList,
    ColGrid,
    Block,
} from '@tremor/react';

import { useState } from 'react';
import ClaimStatusTable from '../components/ClaimStatusTable';

export default function Example() {
    const [selectedView, setSelectedView] = useState(1);
    return (
        <main>
            <Title>Dashboard</Title>
            <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

            { /* Main section */ }
            <Card marginTop="mt-6">
                <ClaimStatusTable/>
                {/* <div className="h-96" /> */}
            </Card>

            { /* KPI section */ }
            <ColGrid numColsMd={ 2 } gapX="gap-x-6" gapY="gap-y-6" marginTop="mt-6">
                <Card>
                    { /* Placeholder to set height */ }
                    <div className="h-28" />
                </Card>
                <Card>
                    { /* Placeholder to set height */ }
                    <div className="h-28" />
                </Card>
            </ColGrid>
        </main>
    );
}