class CreateGrumbles < ActiveRecord::Migration
  def change
    create_table :grumbles do |t|
      t.text 	 :body
      t.string :author
      t.text	 :avatar_url
      t.string :title

      t.timestamps null: false
    end
  end
end
