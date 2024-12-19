const string = 'Mallika Hajra';

const array = [...string];

const addUniqueElements = function (list, element) {
  if (!list.includes(element)) {
    list.push(element);
  }
  return list;
}

const removeDuplicates = function ([...array]) {
  return  array.reduce(addUniqueElements,[]);
}

// countOccurences() start

const incrementTargetCount = function(element) {
  const target = element;
  
  return function (count, element) {
    return target === element ? count + 1 : count;
  }
}

const countOccurences = function (target, [...array]) {
  return array.reduce(incrementTargetCount(target), 0);
}

// countOccurences() end

const getFrequencyChart = function (array) {
  return function (target) {
    return [target, countOccurences(target, array)];
  }
}

const frequency = function ([...array]) {
  const uniqueElements = removeDuplicates(array);

  // const frequencyChart = uniqueElements.map(getFrequencyChart(array));

  // return frequencyChart;
  return uniqueElements.map(getFrequencyChart(array))
}

// console.log(frequency(array));

// console.table(frequency(`American Writers is a work of literary criticism by American writer and critic John Neal. Published by Blackwood's Edinburgh Magazine in five installments between September 1824 and February 1825, it is recognized by scholars as the first history of American literature and the first substantial work of literary criticism concerning US authors. It is Neal's longest critical work and at least 120 authors are covered, based entirely on Neal's memory. With no notes or books for reference, Neal made multiple factually inaccurate claims and provided coverage of many authors that modern scholars criticize as disproportionate to their role in American literature. Scholars nevertheless praise the staying power of Neal's opinions, many of which are reflected by other critics decades later, notably "Fenimore Cooper's Literary Offenses" by Mark Twain. Theories of poetry and prose in American Writers foreshadowed and likely influenced later works by Edgar Allan Poe and Walt Whitman. In an early critique of the colonial mentality and call for literary decolonisation, Neal argued American literature relied too much on British precedent and had failed to develop its own voice. He offered sharp criticism of many authors while simultaneously urging critics not to offer writers from the US undeserved praise, lest doing so stifle the development of a truly distinct American literature. Poe's later critical essays on literature reflected these strictures.

  // Neal wrote the series in London, where he lived between 1824 and 1827. Having moved there from Baltimore, his goals were to establish himself as America's leading literary figure, encourage the development of a uniquely American writing style, and reverse British disdain for literature from the US. He soon became the first American published in any British literary journal, American Writers being the longest and best-remembered of his works on American topics in multiple UK periodicals. He wrote for Scottish publisher William Blackwood under an English pseudonym, which Neal assumed was convincing. Blackwood and British readers likely realized they were reading the work of an American, and multiple leading American periodicals outed Neal before the series was completed.
  
  // The series was well received in the UK and exerted influence over British critics, some of whom repeated Neal's analyses and misinformation into their own essays without investigating for themselves. It conversely drew considerable ire from US journalists, none more severe than William Lloyd Garrison, who warned Neal to be on guard should he return to his home country. When he did, Neal found inflammatory broadsides and in-person hostility in his hometown of Portland, Maine, leading to a fistfight. In defiance, he decided to stay in Portland, where he lived until his death forty-nine years later. The first postmortem republication of a substantial work by Neal was 1937, when Fred Lewis Pattee collected American Writers for the first time into one publication. That 1937 edition remains the most accessible of Neal's literary productions`));
