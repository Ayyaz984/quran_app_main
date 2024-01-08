import {
  View,
  StyleSheet,
  StatusBar,
  Platform,
  Dimensions,
  PixelRatio,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Pdf from 'react-native-pdf';
import {pageChange} from '../redux/features/PdfSlice';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../components/header/Header';
import FavoritesModal from '../components/drawer/modals/FavoritesModal';
import BookmarkModal from '../components/drawer/modals/BookmarkModal';
import ChapterModal from '../components/drawer/modals/ChaptersModal';
import {getLast} from '../utils/Helpers';
import SurahsModal from '../components/drawer/modals/SurahsModal';
import AboutUsModal from '../components/drawer/modals/AboutUsModal';
import InstructionsModal from '../components/drawer/modals/InstructionsModal';
import {scale, verticalScale} from '../components/scale/Scale';
import {toggleHeader} from '../redux/features/HeaderSlice';

const {width, height, fontScale} = Dimensions.get('window');
const ViewPDF = () => {
  const pdfRef = useRef();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const HeaderState = useSelector(state => state.Header);

  const s = (height / 680) * 1.2;

  const handlePageChange = pageNo => {
    dispatch(pageChange({pageNo: pageNo}));
  };

  useEffect(() => {
    setPage(getLast());
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#d8d8d8" barStyle="dark-content" />
      {HeaderState.show && <Header />}
      <Pdf
        ref={pdfRef}
        trustAllCerts={false}
        horizontal
        source={
          Platform.OS === 'android'
            ? {uri: 'bundle-assets://pdf24_merged.pdf', cache: true}
            : require('../../android/app/src/main/assets/pdf24_merged.pdf')
        }
        enablePaging={true}
        style={[
          styles.pdf,
          {
            transform: [
              {scaleY: height < 829 ? s - 0.08 : height / 680},
              {
                scaleX:
                  width < 392 ? width / 360 + 0.08 : (width / 380) * 1.037,
              },
            ],
          },
        ]}
        enableRTL={true}
        enableAntialiasing={true}
        page={page}
        spacing={40}
        showsHorizontalScrollIndicator={false}
        onPageChanged={page => handlePageChange(page)}
        onPageSingleTap={() => dispatch(toggleHeader())}
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
    width: Dimensions.get('window').width,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
});

export default ViewPDF;
