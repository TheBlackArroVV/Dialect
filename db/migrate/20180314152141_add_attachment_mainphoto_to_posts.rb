class AddAttachmentMainphotoToPosts < ActiveRecord::Migration[5.1]
  def self.up
    change_table :posts do |t|
      t.attachment :mainphoto
    end
  end

  def self.down
    remove_attachment :posts, :mainphoto
  end
end
