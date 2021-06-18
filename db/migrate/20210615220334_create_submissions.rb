class CreateSubmissions < ActiveRecord::Migration[6.1]
  def change
    create_table :submissions do |t|
      t.string :comment
      t.references :text_book, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.string :chapter
      t.string :page_number

      t.timestamps
    end
  end
end
