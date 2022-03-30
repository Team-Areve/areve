# 유저

- UniqueID
- Email
- PW
- Name
- Nickname
- Birth
- Over19
- Phone
- Rate(받은 평가 종합)1
- JoinDate
- Location
- Postcode
- Sigungu
- Like(찜한 아이템 번호, 리스트)
- NumItemSharing(판매 중인 아이템)1
- NumWroteReview(작성한 리뷰 수)1
- LastLogin(토큰 만료)
- is_active(계정 삭제)
- role

# 아이템

- UniqueID
- Title
- Category
- Content
- CntImg
- Images(리스트)
- Location
- Postcode
- Sigungu
- Price
- perHour(시간 당 가격인지, 일 당 가격인지, Boolean)
- Rate(아이템 평점)1
- NumWrittenReview(해당 아이템에 대해서 작성된 리뷰 수)1
- NumLikedUser(해당 아이템을 찜한 유저 수)1
- UploadedDate(업로드 된 시간)
- WriterID
- WriterNickName(필요한가?)
- StartTime
- EndTime
- AvailableDate(리스트?)

# 리뷰

- UniqueID
- Score
- Content
- Images(리스트)
- ItemID
- WriterID
- OrderID
- WriterNickName(필요한가?)

# 예약

- UniqueID
- SellerID
- BuyerID-
- ItemID
- StartTime
- EndTime
- Price
- BuyerName
- BuyerPhone
- BuyerEmail
- BuyerDemand
- isReviewWritten(리뷰가 작성된 주문인지, Boolean)
- ConfirmDate(확정 시간)

# 채팅방

- UniqueID
- MemberID(리스트)
- NumMeber
- NumChat
- CreateTime

# 채팅 메시지

- UniqueID
- SenderID
- Message
- ConfirmDate
- ChatRoomID

# 게시판

- ID
- Title

# 게시글

- ID
- BoardID
- WroteTime
- WriterID
- Content
