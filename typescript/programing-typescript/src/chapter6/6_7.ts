function chapter6_7() {
  type CompanyID = string
  type OrderID = string
  type UserID = string
  type ID = CompanyID | OrderID | UserID

  function queryForUser(id: UserID) {

  }

  let id: CompanyID = 'b4843361'
  queryForUser(id)

  type CompanyID2 = string & {readonly brand: unique symbol}
  type OrderID2 = string & {readonly brand: unique symbol}
  type UserID2 = string & {readonly brand: unique symbol}
  type ID2 = CompanyID | OrderID | UserID

  function CompanyID2(id: string) {
    return id as CompanyID2
  }

  function OrderID2(id: string) {
    return id as OrderID2
  }

  function UserID2(id: string) {
    return id as UserID2
  }

  function queryForUser2(id: UserID2) {
    // 
  }

  let companyId = CompanyID2('ba6076cf')
  let orderId = OrderID2('9994acc1')
  let userId = UserID2('d21b1dbf')

  queryForUser2(userId)
  // queryForUser2(companyId)
}