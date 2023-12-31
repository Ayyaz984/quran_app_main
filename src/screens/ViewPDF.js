import {View, Text, StyleSheet} from 'react-native';
import React, { useEffect, useState } from 'react';
// import sourceFile from '../assets/pdf/test.pdf';
import Pdf from 'react-native-pdf';
import {pageChange} from '../redux/features/PdfSlice';
import {useDispatch, useSelector} from 'react-redux';
import ChaptersModal from '../components/drawer/modals/ChaptersModal';
import Header from '../components/header/Header';
import FavoritesModal from '../components/drawer/modals/FavoritesModal';
import BookmarkModal from '../components/drawer/modals/BookmarkModal';

const ViewPDF = () => {
  const dispatch = useDispatch();
  const PdfState = useSelector(state => state.Pdf);
  const [page,setPage] = useState(1)

  const handlePageChange = pageNo => {
    dispatch(pageChange(pageNo));
  };

  useEffect(()=>{
    setPage(PdfState?.lastOpnedPage)
  },[])

  return (
    <View style={styles.container}>
      <Header />
      <Pdf
        trustAllCerts={false}
        horizontal
        source={{uri:"bundle-assets://pdf24_merged-compressed.pdf"}}
        enablePaging={true}
        style={styles.pdf}
        enableRTL={true}
        enableAntialiasing={true}
        page={page}
        spacing={40}
        showsHorizontalScrollIndicator={false}
        onPageChanged={page => handlePageChange(page)}
      />
      {/* <ChaptersModal /> */}
      <FavoritesModal />
      <BookmarkModal />
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
    transform: [{scaleY: 1.12}, {scaleX: 1.07}],
    width: '100%',
  },
});

export default ViewPDF;
