import { useState } from 'react';
import { Card, Text, Metric, BarList, Tab, TabList } from '@tremor/react';

const runners = [
  {
    name: 'Lena',
    data: [
      { name: 'Running', value: 45 },
      { name: 'Paddle tennis', value: 35 },
      { name: 'Functional strength', value: 71 },
      { name: 'Yoga', value: 120 },
      { name: 'Cycling', value: 91 }
    ]
  },
  {
    name: 'Emma',
    data: [
      { name: 'Super Cycle', value: 15 },
      { name: 'Squash', value: 35 },
      { name: 'Volleyball', value: 71 },
      { name: 'Running', value: 120 },
      { name: 'Treadmill', value: 41 }
    ]
  },
  {
    name: 'Leon',
    data: [
      { name: 'Tennis', value: 28 },
      { name: 'Trail running', value: 29 },
      { name: 'Super cycle', value: 23 },
      { name: 'Yoga', value: 34 },
      { name: 'Hiking', value: 12 }
    ]
  }
];

const valueFormatter = (number: number) => `${Intl.NumberFormat('us').format(number).toString()}h`;

export default function Example() {
  const [selectedRunner, setSelectedRunner] = useState(runners[0].name);

  return (
    <Card>
      <Text>Activity Summary</Text>
      <Metric marginTop="mt-2">300.2 hours</Metric>
      <TabList defaultValue="Lena" handleSelect={(value) => setSelectedRunner(value)}>
        <Tab value="Lena" text="Lena" />
        <Tab value="Emma" text="Emma" />
        <Tab value="Leon" text="Leon" />
      </TabList>
      <BarList
        data={runners.filter((runner) => runner.name === selectedRunner)[0].data}
        valueFormatter={valueFormatter}
        marginTop="mt-2"
      />
    </Card>
  );
}
