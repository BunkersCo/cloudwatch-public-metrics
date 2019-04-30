const metrics: MetricConfiguration[] = [
  {
    name: "AWS/Billing//EstimatedCharges",
    title: "Total AWS Charges",
    duration: "15 days",
    statistic: "Average",
    dimensions: [{ Name: "Currency", Value: "USD" }],
    suffix: "$"
  }
];

export default metrics;