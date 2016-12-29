class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  
  belongs_to :plan
  
  attr_accessor :stripe_card_token
  def save_with_subscription
    if valid?
      # customer = Stripe::Customer.create(description: email, plan: plan_id, card: stripe_card_token)
      o = [('a'..'z'), ('A'..'Z')].map { |i| i.to_a }.flatten
      string = (0...12).map { o[rand(o.length)] }.join
      self.stripe_customer_token = string
      save!
    end
  end
end
