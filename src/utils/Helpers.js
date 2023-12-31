import {chapters} from '../constants/Chapters';

export const getChapterById = pageNo => {
  let searchedChapter = null;
  chapters.forEach(chapter => {
    if (pageNo >= chapter.pageStart && pageNo <= chapter.pageEnd) {
      searchedChapter = chapter.labelEng;
    }
  });

  return searchedChapter;
};

// export const getJuzByPage = pageNo => {
//   let searchJuz = null;
//   juz.forEach(jz => {
//     if (pageNo >= jz.pageStart && pageNo <= jz.pageEnd) {
//       searchJuz = jz.labelEng;
//     }
//   });

//   return searchJuz;
// };
