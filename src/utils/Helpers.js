import {useSelector} from 'react-redux';
import {store} from '../redux/store';
import {chapters} from '../constants/Chapters';
import {surah} from '../constants/Surahs';

export const getChapterById = pageNo => {
  let searchedChapter = {};
  chapters.forEach(chapter => {
    if (pageNo >= chapter.pageStart && pageNo <= chapter.pageEnd) {
      searchedChapter.chapterLabel = chapter.labelEng;
      searchedChapter.pageNo = pageNo;
    }
  });

  return searchedChapter;
};

export const getSurahByPage = pageNo => {
  let searchedSurah = {};
  surah.forEach(sur => {
    if (pageNo >= sur.pageStart && pageNo <= sur.pageEnd) {
      searchedSurah.surahLabel = sur.labelEng;
      searchedSurah.pageNo = pageNo;
    }
  });

  return searchedSurah;
};

// get last visited page to use this page no for app loading
export function getLast() {
  const state = store.getState();
  console.log('asdfffffffffff;', state.Pdf);
  return state.Pdf.lastOpnedPage;
}
