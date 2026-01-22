export function groupByKey(data, key, valueKey) {
    const result = {};
  
    data.forEach(item => {
      const k = item[key] || "Unknown";
      const v = item[valueKey] || 0;
      result[k] = (result[k] || 0) + v;
    });
  
    return {
      labels: Object.keys(result),
      values: Object.values(result),
    };
  }
  