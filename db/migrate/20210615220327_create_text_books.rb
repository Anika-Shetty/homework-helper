class CreateTextBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :text_books do |t|
      t.string :name
      t.references :subject, null: false, foreign_key: true
      t.string :author
      t.string :description
      t.string :publisher

      t.timestamps
    end
  end
end
