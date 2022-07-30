const searchBillboardDataList = ({ data }: any) => {
    return(
      <FlatList data={resultData} render={<searchDataList items={items} />}>
        
      </FlatList>
    )
  }

export default searchBillboardDataList