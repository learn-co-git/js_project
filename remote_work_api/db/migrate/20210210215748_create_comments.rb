class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.text :statement
      t.string :user_name
      t.timestamps
    end
  end
end
