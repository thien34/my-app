export type CartItemType = {
  id: number
  name: string
  price: number
  priceSell: number
  image: string
  quantity: number
  quantityMax: number
  variant: {
    id: number
    name: string
    value: string
  }[]
}

export type MethodTransport = {
  name: string
  price: number
  id: string
}

export type CouponType = {
  code: string
  discount: number
}

export type AddressType = {
  name: string
  email?: string
  phone: string
  detail: string
  city: string
  country: string
  zip: string
}

export type CheckoutType = {
  cartItems: CartItemType[]
  id: string
  products: number[] // id of product in cartItems
  countProduct: number
  total: number
  provisional: number // total product cost
  discount: number // total product costs decrease
  discountCoupon: number
  transport: number
  methodTransport: string
  codeCoupon: CouponType[]
  methodPayment: string
  address: AddressType
  statusPayment: 'cod' | 'success' | 'pending'
  errors: Record<string, string>
}

export enum ActionType {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  CHANGE_QUANTITY = 'CHANGE_QUANTITY',
  CHANGE_METHOD_PAYMENT = 'CHANGE_METHOD_PAYMENT',
  CHANGE_ADDRESS = 'CHANGE_ADDRESS',
  ADD_COUPON = 'ADD_COUPON',
  REMOVE_COUPON = 'REMOVE_COUPON',
  SET_METHOD_PAYMENT = 'SET_METHOD_PAYMENT',
  SET_ERROR = 'SET_ERROR'
}

type AddItem = {
  type: ActionType.ADD_ITEM
  value: CartItemType
}

type RemoveItem = {
  type: ActionType.REMOVE_ITEM
  value: CartItemType
}

type ChangeQuantity = {
  type: ActionType.CHANGE_QUANTITY
  value: Pick<CartItemType, 'id' | 'quantity'>
}

type ChangeAddress = {
  type: ActionType.CHANGE_ADDRESS
  value: AddressType
}

type ChangeMethodPayment = {
  type: ActionType.CHANGE_METHOD_PAYMENT
  value: Pick<CheckoutType, 'methodPayment' | 'transport'>
}

type AddCoupon = {
  type: ActionType.ADD_COUPON
  value: CouponType
}

type RemoveCoupon = {
  type: ActionType.REMOVE_COUPON
  value: CouponType
}

type SetMethodPayment = {
  type: ActionType.SET_METHOD_PAYMENT
  value: string
}

type SetError = {
  type: ActionType.SET_ERROR
  value: {
    key: string
    messgae: string
  }
}

export type Action =
  | AddItem
  | RemoveItem
  | ChangeQuantity
  | ChangeMethodPayment
  | ChangeAddress
  | AddCoupon
  | RemoveCoupon
  | SetMethodPayment
  | SetError
