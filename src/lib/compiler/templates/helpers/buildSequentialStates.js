

export function buildSequentialStates(timeline, allIds) {
    const actions = [];
    const visibleSet = new Set();
  
    for (const step of timeline) {
      visibleSet.add(step.id);
  
      const visible = Array.from(visibleSet);
  
      const hidden = allIds.filter(id => !visibleSet.has(id));
  
      actions.push({
        time: step.time,
        state: {
          visible,
          hidden
        }
      });
    }
  
    return actions;
  }