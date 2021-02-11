class AddOfficeToComments < ActiveRecord::Migration[6.1]
  def change
    add_reference :comments, :office, null: false, foreign_key: true
  end
end
