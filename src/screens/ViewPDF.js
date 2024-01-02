import {View, StyleSheet, StatusBar, Platform} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
// import sourceFile from '../assets/pdf/test.pdf';
import Pdf from 'react-native-pdf';
import {pageChange} from '../redux/features/PdfSlice';
import {useDispatch} from 'react-redux';
import Header from '../components/header/Header';
import FavoritesModal from '../components/drawer/modals/FavoritesModal';
import BookmarkModal from '../components/drawer/modals/BookmarkModal';
import ChapterModal from '../components/drawer/modals/ChaptersModal';
import {getLast} from '../utils/Helpers';
import SurahsModal from '../components/drawer/modals/SurahsModal';
import AboutUsModal from '../components/drawer/modals/AboutUsModal';
import InstructionsModal from '../components/drawer/modals/InstructionsModal';
import {scale, verticalScale} from '../components/scale/Scale';

const ViewPDF = () => {
  const pdfRef = useRef();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const handlePageChange = pageNo => {
    dispatch(pageChange({pageNo: pageNo}));
  };

  useEffect(() => {
    setPage(getLast());
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#d8d8d8" barStyle="dark-content" />
      <Header />
      <Pdf
        ref={pdfRef}
        trustAllCerts={false}
        horizontal
        source={
          Platform.OS === 'android'
            ? {uri: 'bundle-assets://pdf24_merged-compressed.pdf', cache: true}
            : require('../../android/app/src/main/assets/pdf24_merged-compressed.pdf')
        }
        enablePaging={true}
        style={styles.pdf}
        enableRTL={true}
        enableAntialiasing={true}
        page={page}
        spacing={40}
        showsHorizontalScrollIndicator={false}
        onPageChanged={page => handlePageChange(page)}
      />
      <ChapterModal pdfRef={pdfRef} />
      <SurahsModal pdfRef={pdfRef} />
      <FavoritesModal pdfRef={pdfRef} />
      <BookmarkModal pdfRef={pdfRef} />
      <AboutUsModal />
      <InstructionsModal />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pdf: {
    flex: 1,
    marginTop: 5,
    transform: [{scaleY: verticalScale(1.12)}, {scaleX: scale(1.03)}],
    width: '100%',
  },
});

export default ViewPDF;
