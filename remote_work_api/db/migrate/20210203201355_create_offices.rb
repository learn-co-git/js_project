class CreateOffices < ActiveRecord::Migration[6.1]
  def change
    create_table :offices do |t|
      t.string :location
      t.string :cell
      t.string :bathrooms
      t.string :peace_index
      t.text :description
      t.timestamps
    end
  end
end
