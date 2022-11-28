import { Page, Document, Font, StyleSheet, Text, Image } from '@react-pdf/renderer'

Font.register({
   family: 'ConsolaMono',
   src: 'https://cdn.jsdelivr.net/gh/marsicdev/project-sandbox@a59505c1337ecd637d1c6336424afa3f3eee5757/files/ConsolaMono.ttf',
})

const PDFFile = ({ journal, qrCode }) => (
   <Document>
      <Page style={styles.page} size="A4">
         <Text>{journal.split('\r\n').join('\n').trim()}</Text>
         <Image src={qrCode} style={styles.image} />
      </Page>
   </Document>
)

const styles = StyleSheet.create({
   page: {
      padding: 14,
      fontFamily: 'ConsolaMono',
      fontSize: 10,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
   },
   image: {
      width: '250px',
   },
})

export default PDFFile
