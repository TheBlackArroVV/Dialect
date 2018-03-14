class AddPostIdToAttachments < ActiveRecord::Migration[5.1]
  def change
    add_column :attachments, :post_id, :string
    add_index :attachments, :post_id
  end
end
